.. title:: Package Recipe 'wtforms-components'
.. highlight: bash


wtforms-components
==================

.. conda:recipe:: wtforms-components
   :replaces_section_title:

   Additional fields\, validators and widgets for WTForms.

   :homepage: https://github.com/kvesteri/wtforms-components
   :license: BSD License
   :recipe: /`wtforms-components <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtforms-components>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtforms-components/meta.yaml>`_

   


.. conda:package:: wtforms-components

   |downloads_wtforms-components| |docker_wtforms-components|

   :versions: 0.10.0

   :depends: :conda:package:`intervals` >=0.6.0 :conda:package:`phonenumbers`  :conda:package:`python` 2.7* :conda:package:`six` >=1.4.1 :conda:package:`validators` >=0.5.0 :conda:package:`wtforms` >=1.0.4 

   :required~by: |required_by_wtforms-components|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wtforms-components

   and update with::

      conda update wtforms-components

   or use the docker container::

      docker pull quay.io/repository/biocontainers/wtforms-components


.. |required_by_wtforms-components| conda:required_by:: wtforms-components
.. |downloads_wtforms-components| image:: https://img.shields.io/conda/dn/bioconda/wtforms-components.svg?style=flat
   :alt:   (downloads)
.. |docker_wtforms-components| image:: https://quay.io/repository/biocontainers/wtforms-components/status
   :target: https://quay.io/repository/biocontainers/wtforms-components







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wtforms-components/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wtforms-components/README.html

