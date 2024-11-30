:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnuvid'
.. highlight: bash

gnuvid
======

.. conda:recipe:: gnuvid
   :replaces_section_title:
   :noindex:

   GNUVID is Gene Novelty Unit\-based Virus IDentification for SARS\-CoV\-2

   :homepage: https://github.com/ahmedmagds/GNUVID
   :license: GPL / GPLv3
   :recipe: /`gnuvid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnuvid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnuvid/meta.yaml>`_

   


.. conda:package:: gnuvid

   |downloads_gnuvid| |docker_gnuvid|

   :versions:
      
      

      ``2.4-0``,  ``2.3-0``,  ``2.2-3``,  ``2.2-2``,  ``2.2-1``,  ``2.2-0``,  ``2.1-0``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends blast: ``>=2.9.0``
   :depends gofasta: ``>=0.0.3``
   :depends mafft: ``>=7.453``
   :depends matplotlib-base: ``>=3.3.3``
   :depends minimap2: ``>=2.17``
   :depends pandas: ``>=1.1.5``
   :depends python: ``>=3.8``
   :depends scikit-learn: ``0.24.2.*``
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

      mamba install gnuvid

   and update with::

      mamba update gnuvid

  To create a new environment, run::

      mamba create --name myenvname gnuvid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gnuvid:<tag>

   (see `gnuvid/tags`_ for valid values for ``<tag>``)


.. |downloads_gnuvid| image:: https://img.shields.io/conda/dn/bioconda/gnuvid.svg?style=flat
   :target: https://anaconda.org/bioconda/gnuvid
   :alt:   (downloads)
.. |docker_gnuvid| image:: https://quay.io/repository/biocontainers/gnuvid/status
   :target: https://quay.io/repository/biocontainers/gnuvid
.. _`gnuvid/tags`: https://quay.io/repository/biocontainers/gnuvid?tab=tags


.. raw:: html

    <script>
        var package = "gnuvid";
        var versions = ["2.4","2.3","2.2","2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnuvid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnuvid/README.html