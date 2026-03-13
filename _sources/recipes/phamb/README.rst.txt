:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phamb'
.. highlight: bash

phamb
=====

.. conda:recipe:: phamb
   :replaces_section_title:
   :noindex:

   phamb discovery approach used to isolate metagenome derived viromes and High\-quality viral genomes

   :homepage: https://github.com/RasmussenLab/phamb
   :license: MIT / GNU General Public (GPL)
   :recipe: /`phamb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phamb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phamb/meta.yaml>`_

   


.. conda:package:: phamb

   |downloads_phamb| |docker_phamb|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on numpy: ``>=1.14.6``
   :depends on python: ``>=3.9``
   :depends on scikit-learn: ``1.0.2``

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

    pixi global install phamb

to add into an existing workspace instead, run::

    pixi add phamb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phamb

Alternatively, to install into a new environment, run::

    conda create -n envname phamb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phamb:<tag>

(see `phamb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phamb| image:: https://img.shields.io/conda/dn/bioconda/phamb.svg?style=flat
   :target: https://anaconda.org/bioconda/phamb
   :alt:   (downloads)
.. |docker_phamb| image:: https://quay.io/repository/biocontainers/phamb/status
   :target: https://quay.io/repository/biocontainers/phamb
.. _`phamb/tags`: https://quay.io/repository/biocontainers/phamb?tab=tags


.. raw:: html

    <script>
        var package = "phamb";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phamb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phamb/README.html