:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rxdock'
.. highlight: bash

rxdock
======

.. conda:recipe:: rxdock
   :replaces_section_title:

   RxDock is a fork of rDock \(GitLab\)\, a fast\, versatile and open\-source program for docking ligands to proteins and nucleic acids.

   :homepage: https://www.rxdock.org
   :developer docs: https://gitlab.com/rxdock/rxdock/
   :license: LGPL-3.0
   :recipe: /`rxdock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rxdock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rxdock/meta.yaml>`_

   


.. conda:package:: rxdock

   |downloads_rxdock| |docker_rxdock|

   :versions: 2013.1.0_b93747f3-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends numpy: 
   :depends openbabel: 
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends popt: >=1.16,<2.0a0
   :depends python: >=2.7,<2.8.0a0
   :depends python_abi: 2.7.* *_cp27mu
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rxdock

   and update with::

      conda update rxdock

   or use the docker container::

      docker pull quay.io/biocontainers/rxdock:<tag>

   (see `rxdock/tags`_ for valid values for ``<tag>``)


.. |downloads_rxdock| image:: https://img.shields.io/conda/dn/bioconda/rxdock.svg?style=flat
   :target: https://anaconda.org/bioconda/rxdock
   :alt:   (downloads)
.. |docker_rxdock| image:: https://quay.io/repository/biocontainers/rxdock/status
   :target: https://quay.io/repository/biocontainers/rxdock
.. _`rxdock/tags`: https://quay.io/repository/biocontainers/rxdock?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rxdock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rxdock/README.html