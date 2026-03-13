:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hiphase'
.. highlight: bash

hiphase
=======

.. conda:recipe:: hiphase
   :replaces_section_title:
   :noindex:

   Small and structural variant phasing tool for PacBio HiFi reads

   :homepage: https://github.com/PacificBiosciences/HiPhase
   :license: BSD-3-Clause-Clear
   :recipe: /`hiphase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiphase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiphase/meta.yaml>`_

   


.. conda:package:: hiphase

   |downloads_hiphase| |docker_hiphase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.5-0</code>,  <code>1.4.4-0</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-0</code>,  </span></summary>
      

      ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.10.2-0``,  ``0.10.0-0``,  ``0.8.1-0``

      
      .. raw:: html

         </details>
      

   

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

    pixi global install hiphase

to add into an existing workspace instead, run::

    pixi add hiphase

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hiphase

Alternatively, to install into a new environment, run::

    conda create -n envname hiphase

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hiphase:<tag>

(see `hiphase/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hiphase| image:: https://img.shields.io/conda/dn/bioconda/hiphase.svg?style=flat
   :target: https://anaconda.org/bioconda/hiphase
   :alt:   (downloads)
.. |docker_hiphase| image:: https://quay.io/repository/biocontainers/hiphase/status
   :target: https://quay.io/repository/biocontainers/hiphase
.. _`hiphase/tags`: https://quay.io/repository/biocontainers/hiphase?tab=tags


.. raw:: html

    <script>
        var package = "hiphase";
        var versions = ["1.6.0","1.5.0","1.4.5","1.4.4","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hiphase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hiphase/README.html