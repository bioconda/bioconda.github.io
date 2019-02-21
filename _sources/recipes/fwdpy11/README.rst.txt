:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fwdpy11'
.. highlight: bash

fwdpy11
=======

.. conda:recipe:: fwdpy11
   :replaces_section_title:

   Forward\-time population genetic simulation in Python.

   :homepage: http://pypi.python.org/pypi/fwdpy11
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`fwdpy11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpy11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpy11/meta.yaml>`_

   


.. conda:package:: fwdpy11

   |downloads_fwdpy11| |docker_fwdpy11|

   :versions: 0.1.4-2, 0.1.4-1, 0.1.4-0, 0.1.3.post3-0, 0.1.3.post1-0, 0.1.3a1-0, 0.1.3a0-0, 0.1.2-0, 0.1.1-0, 0.1.post4-0, 0.1.post2-0
   
   :depends gsl: >=2.2.1,<2.3.0a0
   
   :depends numpy: >=1.10
   
   :depends openblas: >=0.2.20,<0.2.21.0a0
   
   :depends python: >=3.5,<3.6.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fwdpy11

   and update with::

      conda update fwdpy11

   or use the docker container::

      docker pull quay.io/biocontainers/fwdpy11:<tag>

   (see `fwdpy11/tags`_ for valid values for ``<tag>``)


.. |downloads_fwdpy11| image:: https://img.shields.io/conda/dn/bioconda/fwdpy11.svg?style=flat
   :alt:   (downloads)
.. |docker_fwdpy11| image:: https://quay.io/repository/biocontainers/fwdpy11/status
   :target: https://quay.io/repository/biocontainers/fwdpy11
.. _`fwdpy11/tags`: https://quay.io/repository/biocontainers/fwdpy11?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fwdpy11/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fwdpy11/README.html