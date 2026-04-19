:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gadem'
.. highlight: bash

gadem
=====

.. conda:recipe:: gadem
   :replaces_section_title:
   :noindex:

   A Genetic Algorithm Guided Formation of Spaced Dyads Coupled with an EM Algorithm for Motif Discovery

   :homepage: https://www.niehs.nih.gov/research/resources/software/biostatistics/gadem/index.cfm
   :license: GPLv3
   :recipe: /`gadem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gadem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gadem/meta.yaml>`_

   


.. conda:package:: gadem

   |downloads_gadem| |docker_gadem|

   :versions:
      
      

      ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends on libgcc: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install gadem

to add into an existing workspace instead, run::

    pixi add gadem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gadem

Alternatively, to install into a new environment, run::

    conda create -n envname gadem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gadem:<tag>

(see `gadem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gadem| image:: https://img.shields.io/conda/dn/bioconda/gadem.svg?style=flat
   :target: https://anaconda.org/bioconda/gadem
   :alt:   (downloads)
.. |docker_gadem| image:: https://quay.io/repository/biocontainers/gadem/status
   :target: https://quay.io/repository/biocontainers/gadem
.. _`gadem/tags`: https://quay.io/repository/biocontainers/gadem?tab=tags


.. raw:: html

    <script>
        var package = "gadem";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gadem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gadem/README.html