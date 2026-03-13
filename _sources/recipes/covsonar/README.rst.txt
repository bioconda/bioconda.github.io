:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'covsonar'
.. highlight: bash

covsonar
========

.. conda:recipe:: covsonar
   :replaces_section_title:
   :noindex:

   A database\-driven system for handling genomic sequences and screening genomic profiles.

   :homepage: https://github.com/rki-mf1/covsonar
   :license: GPL-3.0
   :recipe: /`covsonar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covsonar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covsonar/meta.yaml>`_

   


.. conda:package:: covsonar

   |downloads_covsonar| |docker_covsonar|

   :versions:
      
      

      ``2.0.0a1-0``,  ``2.0.0a0-0``

      

   
   :depends on biopython: ``>=1.79,<1.80``
   :depends on emboss: ``6.6.0``
   :depends on more-itertools: ``>=8.7.0,<8.8.0``
   :depends on mpire: ``>=2.3.3,<2.4.0``
   :depends on pandas: ``>=1.4.0,<1.5.0``
   :depends on pyaml: ``>=20.4.0,<20.5.0``
   :depends on python: ``>=3.9,<4.0``
   :depends on requests: ``>=2.28.0,<3.0.0``
   :depends on tabulate: ``>=0.8.9,<0.9.0``
   :depends on tqdm: ``>=4.59.0,<4.60.0``

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

    pixi global install covsonar

to add into an existing workspace instead, run::

    pixi add covsonar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install covsonar

Alternatively, to install into a new environment, run::

    conda create -n envname covsonar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/covsonar:<tag>

(see `covsonar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_covsonar| image:: https://img.shields.io/conda/dn/bioconda/covsonar.svg?style=flat
   :target: https://anaconda.org/bioconda/covsonar
   :alt:   (downloads)
.. |docker_covsonar| image:: https://quay.io/repository/biocontainers/covsonar/status
   :target: https://quay.io/repository/biocontainers/covsonar
.. _`covsonar/tags`: https://quay.io/repository/biocontainers/covsonar?tab=tags


.. raw:: html

    <script>
        var package = "covsonar";
        var versions = ["2.0.0a1","2.0.0a0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/covsonar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/covsonar/README.html