:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'splitcode'
.. highlight: bash

splitcode
=========

.. conda:recipe:: splitcode
   :replaces_section_title:
   :noindex:

   Flexible parsing\, interpretation\, and editing of technical sequences.

   :homepage: https://github.com/pachterlab/splitcode
   :documentation: https://splitcode.readthedocs.io
   
   :license: BSD / BSD-2-Clause
   :recipe: /`splitcode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitcode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitcode/meta.yaml>`_
   :links: biotools: :biotools:`splitcode`, doi: :doi:`10.1101/2023.03.20.533521`

   


.. conda:package:: splitcode

   |downloads_splitcode| |docker_splitcode|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.31.6-0</code>,  <code>0.31.5-0</code>,  <code>0.31.4-0</code>,  <code>0.31.3-0</code>,  <code>0.31.2-2</code>,  <code>0.31.2-1</code>,  <code>0.31.2-0</code>,  <code>0.31.1-0</code>,  <code>0.31.0-0</code>,  </span></summary>
      

      ``0.31.6-0``,  ``0.31.5-0``,  ``0.31.4-0``,  ``0.31.3-0``,  ``0.31.2-2``,  ``0.31.2-1``,  ``0.31.2-0``,  ``0.31.1-0``,  ``0.31.0-0``,  ``0.30.0-1``,  ``0.30.0-0``,  ``0.29.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install splitcode

to add into an existing workspace instead, run::

    pixi add splitcode

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install splitcode

Alternatively, to install into a new environment, run::

    conda create -n envname splitcode

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/splitcode:<tag>

(see `splitcode/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_splitcode| image:: https://img.shields.io/conda/dn/bioconda/splitcode.svg?style=flat
   :target: https://anaconda.org/bioconda/splitcode
   :alt:   (downloads)
.. |docker_splitcode| image:: https://quay.io/repository/biocontainers/splitcode/status
   :target: https://quay.io/repository/biocontainers/splitcode
.. _`splitcode/tags`: https://quay.io/repository/biocontainers/splitcode?tab=tags


.. raw:: html

    <script>
        var package = "splitcode";
        var versions = ["0.31.6","0.31.5","0.31.4","0.31.3","0.31.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/splitcode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/splitcode/README.html