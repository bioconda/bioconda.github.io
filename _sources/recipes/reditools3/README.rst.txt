:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reditools3'
.. highlight: bash

reditools3
==========

.. conda:recipe:: reditools3
   :replaces_section_title:
   :noindex:

   REDItools3 is an RNA editing detection tool implemented in Python3 for analyzing RNA\-seq data.

   :homepage: https://github.com/BioinfoUNIBA/REDItools3
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`reditools3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reditools3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reditools3/meta.yaml>`_
   :links: doi: :doi:`10.1093/bib/bbaf107`, doi: :doi:`10.1093/bioinformatics/btt287`

   


.. conda:package:: reditools3

   |downloads_reditools3| |docker_reditools3|

   :versions:
      
      

      ``3.4-0``

      

   
   :depends pysam: ``>=0.22.0``
   :depends python: ``>=3.7``
   :depends sortedcontainers: ``>=2.4.0``
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

      mamba install reditools3

   and update with::

      mamba update reditools3

  To create a new environment, run::

      mamba create --name myenvname reditools3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/reditools3:<tag>

   (see `reditools3/tags`_ for valid values for ``<tag>``)


.. |downloads_reditools3| image:: https://img.shields.io/conda/dn/bioconda/reditools3.svg?style=flat
   :target: https://anaconda.org/bioconda/reditools3
   :alt:   (downloads)
.. |docker_reditools3| image:: https://quay.io/repository/biocontainers/reditools3/status
   :target: https://quay.io/repository/biocontainers/reditools3
.. _`reditools3/tags`: https://quay.io/repository/biocontainers/reditools3?tab=tags


.. raw:: html

    <script>
        var package = "reditools3";
        var versions = ["3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reditools3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reditools3/README.html