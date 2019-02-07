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

   :versions: 0.1.4, 0.1.3.post3, 0.1.3.post1, 0.1.3a1, 0.1.3a0, 0.1.2, 0.1.1, 0.1.post4, 0.1.post2

   :depends: :conda:package:`gsl` 1.16* :conda:package:`libgcc`  :conda:package:`numpy` >=1.10 :conda:package:`python` 3.5* 

   :required~by: |required_by_fwdpy11|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fwdpy11

   and update with::

      conda update fwdpy11

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fwdpy11


.. |required_by_fwdpy11| conda:required_by:: fwdpy11
.. |downloads_fwdpy11| image:: https://img.shields.io/conda/dn/bioconda/fwdpy11.svg?style=flat
   :alt:   (downloads)
.. |docker_fwdpy11| image:: https://quay.io/repository/biocontainers/fwdpy11/status
   :target: https://quay.io/repository/biocontainers/fwdpy11







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fwdpy11/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fwdpy11/README.html

