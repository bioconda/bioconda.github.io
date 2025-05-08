:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quota_anchor'
.. highlight: bash

quota_anchor
============

.. conda:recipe:: quota_anchor
   :replaces_section_title:
   :noindex:

   Strand and WGD aware syntenic gene identification

   :homepage: https://github.com/baoxingsong/quota_Anchor
   :license: MIT / MIT
   :recipe: /`quota_anchor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quota_anchor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quota_anchor/meta.yaml>`_

   Strand and WGD aware syntenic gene identification for comparative genomics


.. conda:package:: quota_anchor

   |downloads_quota_anchor| |docker_quota_anchor|

   :versions:
      
      

      ``1.0.0-0``,  ``1.0.0rc-0``,  ``0.0.1rc-0``,  ``0.0.1b2-1``,  ``0.0.1b2-0``,  ``0.0.1b1-0``,  ``0.0.1a1-0``,  ``0.0.1a0-0``

      

   
   :depends alive-progress: 
   :depends anchorwave: 
   :depends biopython: 
   :depends blast: 
   :depends diamond: 
   :depends ete3: 
   :depends gffread: 
   :depends mafft: 
   :depends matplotlib-base: 
   :depends muscle: 
   :depends numpy: 
   :depends pal2nal: 
   :depends paml: 
   :depends pandas: 
   :depends plotnine: 
   :depends python: ``>=3,<3.13``
   :depends scikit-learn: 
   :depends seaborn: 
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

      mamba install quota_anchor

   and update with::

      mamba update quota_anchor

  To create a new environment, run::

      mamba create --name myenvname quota_anchor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quota_anchor:<tag>

   (see `quota_anchor/tags`_ for valid values for ``<tag>``)


.. |downloads_quota_anchor| image:: https://img.shields.io/conda/dn/bioconda/quota_anchor.svg?style=flat
   :target: https://anaconda.org/bioconda/quota_anchor
   :alt:   (downloads)
.. |docker_quota_anchor| image:: https://quay.io/repository/biocontainers/quota_anchor/status
   :target: https://quay.io/repository/biocontainers/quota_anchor
.. _`quota_anchor/tags`: https://quay.io/repository/biocontainers/quota_anchor?tab=tags


.. raw:: html

    <script>
        var package = "quota_anchor";
        var versions = ["1.0.0","1.0.0rc","0.0.1rc","0.0.1b2","0.0.1b2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quota_anchor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quota_anchor/README.html