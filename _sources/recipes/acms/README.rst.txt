:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'acms'
.. highlight: bash

acms
====

.. conda:recipe:: acms
   :replaces_section_title:
   :noindex:

   Ambivalent Covariance Models \(aCMs\) are our prototypic suggestion to extend CMs with more than one consensus structure.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/acms
   :license: GPL-3.0-or-later
   :recipe: /`acms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/acms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/acms/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-015-0569-1`, doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: acms

   |downloads_acms| |docker_acms|

   :versions:
      
      

      ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends bellmans-gapc: ``>=2024.01.12``
   :depends bellmans-gapc: ``>=2024.1.12``
   :depends ghc: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install acms

   and update with::

      mamba update acms

  To create a new environment, run::

      mamba create --name myenvname acms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/acms:<tag>

   (see `acms/tags`_ for valid values for ``<tag>``)


.. |downloads_acms| image:: https://img.shields.io/conda/dn/bioconda/acms.svg?style=flat
   :target: https://anaconda.org/bioconda/acms
   :alt:   (downloads)
.. |docker_acms| image:: https://quay.io/repository/biocontainers/acms/status
   :target: https://quay.io/repository/biocontainers/acms
.. _`acms/tags`: https://quay.io/repository/biocontainers/acms?tab=tags


.. raw:: html

    <script>
        var package = "acms";
        var versions = ["1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/acms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/acms/README.html