.. title:: Package Recipe 'wtforms-alchemy'
.. highlight: bash


wtforms-alchemy
===============

.. conda:recipe:: wtforms-alchemy
   :replaces_section_title:

   Generates WTForms forms from SQLAlchemy models.

   :homepage: https://github.com/kvesteri/wtforms-alchemy
   :license: BSD License
   :recipe: /`wtforms-alchemy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtforms-alchemy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtforms-alchemy/meta.yaml>`_

   


.. conda:package:: wtforms-alchemy

   |downloads_wtforms-alchemy| |docker_wtforms-alchemy|

   :versions: 0.16.8, 0.16.7, 0.15.0

   :depends: :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`six` >=1.4.1 :conda:package:`sqlalchemy` >=0.8.0 :conda:package:`sqlalchemy-utils` >=0.30.0 :conda:package:`wtforms` >=1.0.4 :conda:package:`wtforms-components` >=0.9.2 

   :required~by: |required_by_wtforms-alchemy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wtforms-alchemy

   and update with::

      conda update wtforms-alchemy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/wtforms-alchemy


.. |required_by_wtforms-alchemy| conda:required_by:: wtforms-alchemy
.. |downloads_wtforms-alchemy| image:: https://img.shields.io/conda/dn/bioconda/wtforms-alchemy.svg?style=flat
   :alt:   (downloads)
.. |docker_wtforms-alchemy| image:: https://quay.io/repository/biocontainers/wtforms-alchemy/status
   :target: https://quay.io/repository/biocontainers/wtforms-alchemy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wtforms-alchemy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wtforms-alchemy/README.html

