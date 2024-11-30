:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgca'
.. highlight: bash

mgca
====

.. conda:recipe:: mgca
   :replaces_section_title:
   :noindex:

   Microbial genome component and annotation pipeline

   :homepage: https://github.com/liaochenlanruo/mgca/blob/master/README.md
   :documentation: https://liaochenlanruo.fun/mgca/
   
   :developer docs: https://github.com/liaochenlanruo/mgca/tree/master
   :license: GPL / GPLv3
   :recipe: /`mgca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgca/meta.yaml>`_
   :links: biotools: :biotools:`mgca`

   Microbial genome component and annotation pipeline.


.. conda:package:: mgca

   |downloads_mgca| |docker_mgca|

   :versions:
      
      

      ``0.0.0-0``

      

   
   :depends bakta: ``1.4.0.*``
   :depends eggnog-mapper: ``2.1.7.*``
   :depends emboss: 
   :depends islandpath: ``1.0.6.*``
   :depends lastz: ``1.04.15.*``
   :depends mummer4: ``4.0.0rc1.*``
   :depends opfi: ``0.1.2.*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl: 
   :depends phispy: ``4.2.21.*``
   :depends r-ggplot2: 
   :depends repeatmasker: ``4.1.2.p1.*``
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

      mamba install mgca

   and update with::

      mamba update mgca

  To create a new environment, run::

      mamba create --name myenvname mgca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mgca:<tag>

   (see `mgca/tags`_ for valid values for ``<tag>``)


.. |downloads_mgca| image:: https://img.shields.io/conda/dn/bioconda/mgca.svg?style=flat
   :target: https://anaconda.org/bioconda/mgca
   :alt:   (downloads)
.. |docker_mgca| image:: https://quay.io/repository/biocontainers/mgca/status
   :target: https://quay.io/repository/biocontainers/mgca
.. _`mgca/tags`: https://quay.io/repository/biocontainers/mgca?tab=tags


.. raw:: html

    <script>
        var package = "mgca";
        var versions = ["0.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgca/README.html