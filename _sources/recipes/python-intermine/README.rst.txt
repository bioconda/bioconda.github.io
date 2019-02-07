.. title:: Package Recipe 'intermine'
.. highlight: bash


intermine
=========

.. conda:recipe:: python-intermine
   :replaces_section_title:

   InterMine WebService client

   :homepage: http://www.intermine.org
   :license: LGPL / GNU Library or Lesser General Public License (LGPL) or BSD License
   :recipe: /`python-intermine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-intermine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-intermine/meta.yaml>`_

   InterMine Webservice Client\:A Python API to access bioinformatics data warehouses powered by the InterMine platform.


.. conda:package:: intermine

   |downloads_intermine| |docker_intermine|

   :versions: 1.11.0, 1.10.0, 1.09.09, 1.09.05

   :depends: :conda:package:`lxml`  :conda:package:`python`  :conda:package:`requests`  

   :required~by: |required_by_intermine|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install intermine

   and update with::

      conda update intermine

   or use the docker container::

      docker pull quay.io/repository/biocontainers/intermine


.. |required_by_intermine| conda:required_by:: intermine
.. |downloads_intermine| image:: https://img.shields.io/conda/dn/bioconda/intermine.svg?style=flat
   :alt:   (downloads)
.. |docker_intermine| image:: https://quay.io/repository/biocontainers/intermine/status
   :target: https://quay.io/repository/biocontainers/intermine







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intermine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intermine/README.html

