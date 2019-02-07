.. title:: Package Recipe 'pysvmlight'
.. highlight: bash


pysvmlight
==========

.. conda:recipe:: pysvmlight
   :replaces_section_title:

   Interface to Thorsten Joachims\' SVM\-Light

   :homepage: https://bitbucket.org/wcauchois/pysvmlight
   :license: UNKNOWN
   :recipe: /`pysvmlight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysvmlight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysvmlight/meta.yaml>`_

   


.. conda:package:: pysvmlight

   |downloads_pysvmlight| |docker_pysvmlight|

   :versions: 0.4

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_pysvmlight|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pysvmlight

   and update with::

      conda update pysvmlight

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pysvmlight


.. |required_by_pysvmlight| conda:required_by:: pysvmlight
.. |downloads_pysvmlight| image:: https://img.shields.io/conda/dn/bioconda/pysvmlight.svg?style=flat
   :alt:   (downloads)
.. |docker_pysvmlight| image:: https://quay.io/repository/biocontainers/pysvmlight/status
   :target: https://quay.io/repository/biocontainers/pysvmlight







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysvmlight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysvmlight/README.html

