:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ibdseq'
.. highlight: bash

ibdseq
======

.. conda:recipe:: ibdseq
   :replaces_section_title:
   :noindex:

   IBDseq is a software program for detecting segments of identity\-by\-descent \(IBD\) and homozygosity\-by\-descent \(HBD\) in unphased genetic sequence data.

   :homepage: http://faculty.washington.edu/browning/ibdseq.html
   :license: Apache v2.0
   :recipe: /`ibdseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibdseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibdseq/meta.yaml>`_
   :links: biotools: :biotools:`IBDseq`, doi: :doi:`10.1016/j.ajhg.2013.09.014`

   


.. conda:package:: ibdseq

   |downloads_ibdseq| |docker_ibdseq|

   :versions:
      
      

      ``r1206-3``,  ``r1206-2``,  ``r1206-1``,  ``r1206-0``

      

   
   :depends openjdk: ``>=6.0.77``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ibdseq

   and update with::

      mamba update ibdseq

  To create a new environment, run::

      mamba create --name myenvname ibdseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ibdseq:<tag>

   (see `ibdseq/tags`_ for valid values for ``<tag>``)


.. |downloads_ibdseq| image:: https://img.shields.io/conda/dn/bioconda/ibdseq.svg?style=flat
   :target: https://anaconda.org/bioconda/ibdseq
   :alt:   (downloads)
.. |docker_ibdseq| image:: https://quay.io/repository/biocontainers/ibdseq/status
   :target: https://quay.io/repository/biocontainers/ibdseq
.. _`ibdseq/tags`: https://quay.io/repository/biocontainers/ibdseq?tab=tags


.. raw:: html

    <script>
        var package = "ibdseq";
        var versions = ["r1206","r1206","r1206","r1206"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ibdseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ibdseq/README.html