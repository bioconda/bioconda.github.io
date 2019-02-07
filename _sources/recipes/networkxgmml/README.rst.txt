.. title:: Package Recipe 'networkxgmml'
.. highlight: bash


networkxgmml
============

.. conda:recipe:: networkxgmml
   :replaces_section_title:

   XGMML parser for networkx

   :homepage: https://github.com/informationsea/networkxxgmml
   :license: UNKNOWN
   :recipe: /`networkxgmml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/networkxgmml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/networkxgmml/meta.yaml>`_

   


.. conda:package:: networkxgmml

   |downloads_networkxgmml| |docker_networkxgmml|

   :versions: 0.1.6

   :depends: :conda:package:`networkx`  :conda:package:`python` 2.7* :conda:package:`setuptools`  

   :required~by: |required_by_networkxgmml|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install networkxgmml

   and update with::

      conda update networkxgmml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/networkxgmml


.. |required_by_networkxgmml| conda:required_by:: networkxgmml
.. |downloads_networkxgmml| image:: https://img.shields.io/conda/dn/bioconda/networkxgmml.svg?style=flat
   :alt:   (downloads)
.. |docker_networkxgmml| image:: https://quay.io/repository/biocontainers/networkxgmml/status
   :target: https://quay.io/repository/biocontainers/networkxgmml







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/networkxgmml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/networkxgmml/README.html

