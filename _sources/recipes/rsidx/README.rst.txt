:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rsidx'
.. highlight: bash

rsidx
=====

.. conda:recipe:: rsidx
   :replaces_section_title:
   :noindex:

   Library for indexing VCF files for random access searches by rsID

   :homepage: https://github.com/bioforensics/rsidx/
   :license: BSD / BSD License
   :recipe: /`rsidx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsidx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsidx/meta.yaml>`_

   


.. conda:package:: rsidx

   |downloads_rsidx| |docker_rsidx|

   :versions:
      
      

      ``0.3-0``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``,  ``0.1.1-0``

      

   
   :depends htslib: ``>=1.10``
   :depends python: ``>=3``
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

      mamba install rsidx

   and update with::

      mamba update rsidx

  To create a new environment, run::

      mamba create --name myenvname rsidx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rsidx:<tag>

   (see `rsidx/tags`_ for valid values for ``<tag>``)


.. |downloads_rsidx| image:: https://img.shields.io/conda/dn/bioconda/rsidx.svg?style=flat
   :target: https://anaconda.org/bioconda/rsidx
   :alt:   (downloads)
.. |docker_rsidx| image:: https://quay.io/repository/biocontainers/rsidx/status
   :target: https://quay.io/repository/biocontainers/rsidx
.. _`rsidx/tags`: https://quay.io/repository/biocontainers/rsidx?tab=tags


.. raw:: html

    <script>
        var package = "rsidx";
        var versions = ["0.3","0.2","0.2","0.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rsidx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rsidx/README.html