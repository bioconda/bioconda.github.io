.. title:: Package Recipe 'xunit-wrapper'
.. highlight: bash


xunit-wrapper
=============

.. conda:recipe:: xunit-wrapper
   :replaces_section_title:

   Wrap python functions with a decorator to handle building XUnit reports

   :homepage: https://github.com/TAMU-CPT/xunit-python-decorator
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`xunit-wrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xunit-wrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xunit-wrapper/meta.yaml>`_

   


.. conda:package:: xunit-wrapper

   |downloads_xunit-wrapper| |docker_xunit-wrapper|

   :versions: 0.12

   :depends: :conda:package:`future`  :conda:package:`junit-xml` ==1.7 :conda:package:`python` 2.7* 

   :required~by: |required_by_xunit-wrapper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xunit-wrapper

   and update with::

      conda update xunit-wrapper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/xunit-wrapper


.. |required_by_xunit-wrapper| conda:required_by:: xunit-wrapper
.. |downloads_xunit-wrapper| image:: https://img.shields.io/conda/dn/bioconda/xunit-wrapper.svg?style=flat
   :alt:   (downloads)
.. |docker_xunit-wrapper| image:: https://quay.io/repository/biocontainers/xunit-wrapper/status
   :target: https://quay.io/repository/biocontainers/xunit-wrapper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xunit-wrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xunit-wrapper/README.html

