.. title:: Package Recipe 'planemo'
.. highlight: bash


planemo
=======

.. conda:recipe:: planemo
   :replaces_section_title:

   Command\-line utilities to assist in building tools for the Galaxy project \(http\:\/\/galaxyproject.org\/\).

   :homepage: https://github.com/galaxyproject/planemo
   :license: Apache / Academic Free License (AFL)
   :recipe: /`planemo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/planemo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/planemo/meta.yaml>`_

   


.. conda:package:: planemo

   |downloads_planemo| |docker_planemo|

   :versions: 0.57.1, 0.57.0, 0.56.0, 0.55.0, 0.54.0, 0.48.0, 0.46.1, 0.40.1, 0.38.1, 0.34.1, 0.33.2, 0.29.1, 0.23.0

   :depends: :conda:package:`aenum`  :conda:package:`bioblend` >=0.10.0 :conda:package:`click`  :conda:package:`docutils`  :conda:package:`ephemeris`  :conda:package:`galaxy-lib` >=18.5.15 :conda:package:`glob2`  :conda:package:`gxformat2`  :conda:package:`jinja2`  :conda:package:`lxml`  :conda:package:`oyaml`  :conda:package:`pyaml`  :conda:package:`python`  :conda:package:`pyyaml`  :conda:package:`six` >=1.7.0 :conda:package:`virtualenv`  

   :required~by: |required_by_planemo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install planemo

   and update with::

      conda update planemo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/planemo


.. |required_by_planemo| conda:required_by:: planemo
.. |downloads_planemo| image:: https://img.shields.io/conda/dn/bioconda/planemo.svg?style=flat
   :alt:   (downloads)
.. |docker_planemo| image:: https://quay.io/repository/biocontainers/planemo/status
   :target: https://quay.io/repository/biocontainers/planemo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/planemo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/planemo/README.html

