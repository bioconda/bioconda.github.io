:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tadarida-d'
.. highlight: bash

tadarida-d
==========

.. conda:recipe:: tadarida-d
   :replaces_section_title:
   :noindex:

   Tadarida\-D \(Toolbox for Animal Detection on Acoustic Recordings \- Detection and Feature extraction part\) for Galaxy use.

   :homepage: https://github.com/YvesBas/Tadarida-D
   :license: LGPL / LGPL-3.0
   :recipe: /`tadarida-d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadarida-d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadarida-d/meta.yaml>`_

   


.. conda:package:: tadarida-d

   |downloads_tadarida-d| |docker_tadarida-d|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.03-9</code>,  <code>1.03-8</code>,  <code>1.03-7</code>,  <code>1.03-6</code>,  <code>1.03-5</code>,  <code>1.03-4</code>,  <code>1.03-3</code>,  <code>1.03-1</code>,  <code>1.03-0</code>,  </span></summary>
      

      ``1.03-9``,  ``1.03-8``,  ``1.03-7``,  ``1.03-6``,  ``1.03-5``,  ``1.03-4``,  ``1.03-3``,  ``1.03-1``,  ``1.03-0``,  ``1.02-0``,  ``1.01-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on fftw: ``>=3.3.10,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libsndfile: ``>=1.2.2,<1.3.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on qt: ``<5``
   :depends on xorg-libsm: 
   :depends on xorg-libx11: 
   :depends on xorg-libxau: 
   :depends on xorg-libxdmcp: 
   :depends on xorg-libxext: 
   :depends on xorg-libxrender: 
   :depends on zlib: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install tadarida-d

to add into an existing workspace instead, run::

    pixi add tadarida-d

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tadarida-d

Alternatively, to install into a new environment, run::

    conda create -n envname tadarida-d

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tadarida-d:<tag>

(see `tadarida-d/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tadarida-d| image:: https://img.shields.io/conda/dn/bioconda/tadarida-d.svg?style=flat
   :target: https://anaconda.org/bioconda/tadarida-d
   :alt:   (downloads)
.. |docker_tadarida-d| image:: https://quay.io/repository/biocontainers/tadarida-d/status
   :target: https://quay.io/repository/biocontainers/tadarida-d
.. _`tadarida-d/tags`: https://quay.io/repository/biocontainers/tadarida-d?tab=tags


.. raw:: html

    <script>
        var package = "tadarida-d";
        var versions = ["1.03","1.03","1.03","1.03","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadarida-d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadarida-d/README.html