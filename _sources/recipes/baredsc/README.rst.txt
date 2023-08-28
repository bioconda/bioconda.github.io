:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'baredsc'
.. highlight: bash

baredsc
=======

.. conda:recipe:: baredsc
   :replaces_section_title:
   :noindex:

   baredSC \(Bayesian Approach to Retreive Expression Distribution of Single Cell\) is a tool that uses a Monte\-Carlo Markov Chain to estimate a confidence interval on the probability density function \(PDF\) of expression of one or two genes from single\-cell RNA\-seq data.

   :homepage: https://github.com/lldelisle/baredSC/
   :license: GPL3
   :recipe: /`baredsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baredsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baredsc/meta.yaml>`_

   


.. conda:package:: baredsc

   |downloads_baredsc| |docker_baredsc|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends anndata: ``>=0.7``
   :depends corner: ``>=2.0.0``
   :depends matplotlib-base: ``>=3.1.1``
   :depends numpy: ``>=1.16``
   :depends pandas: ``>=0.25.0``
   :depends python: ``>=3.7``
   :depends samsam: ``>=0.1.2``
   :depends scipy: ``>=1.3.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install baredsc

   and update with::

      mamba update baredsc

  To create a new environment, run::

      mamba create --name myenvname baredsc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/baredsc:<tag>

   (see `baredsc/tags`_ for valid values for ``<tag>``)


.. |downloads_baredsc| image:: https://img.shields.io/conda/dn/bioconda/baredsc.svg?style=flat
   :target: https://anaconda.org/bioconda/baredsc
   :alt:   (downloads)
.. |docker_baredsc| image:: https://quay.io/repository/biocontainers/baredsc/status
   :target: https://quay.io/repository/biocontainers/baredsc
.. _`baredsc/tags`: https://quay.io/repository/biocontainers/baredsc?tab=tags


.. raw:: html

    <script>
        var package = "baredsc";
        var versions = ["1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/baredsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/baredsc/README.html