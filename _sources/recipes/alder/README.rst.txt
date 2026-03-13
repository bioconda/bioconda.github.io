:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alder'
.. highlight: bash

alder
=====

.. conda:recipe:: alder
   :replaces_section_title:
   :noindex:

   The ALDER software computes the weighted linkage disequilibrium \(LD\) statistic for making inference about population admixture

   :homepage: http://cb.csail.mit.edu/cb/alder/
   :license: Custom OSS
   :recipe: /`alder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alder/meta.yaml>`_
   :links: biotools: :biotools:`alder`, doi: :doi:`10.1534/genetics.112.147330`

   


.. conda:package:: alder

   |downloads_alder| |docker_alder|

   :versions:
      
      

      ``1.03-7``,  ``1.03-6``,  ``1.03-5``,  ``1.03-4``,  ``1.03-3``,  ``1.03-2``,  ``1.03-1``,  ``1.03-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on fftw: ``>=3.3.10,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``

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

    pixi global install alder

to add into an existing workspace instead, run::

    pixi add alder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alder

Alternatively, to install into a new environment, run::

    conda create -n envname alder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alder:<tag>

(see `alder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alder| image:: https://img.shields.io/conda/dn/bioconda/alder.svg?style=flat
   :target: https://anaconda.org/bioconda/alder
   :alt:   (downloads)
.. |docker_alder| image:: https://quay.io/repository/biocontainers/alder/status
   :target: https://quay.io/repository/biocontainers/alder
.. _`alder/tags`: https://quay.io/repository/biocontainers/alder?tab=tags


.. raw:: html

    <script>
        var package = "alder";
        var versions = ["1.03","1.03","1.03","1.03","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alder/README.html