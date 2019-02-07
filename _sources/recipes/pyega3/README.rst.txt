.. title:: Package Recipe 'pyega3'
.. highlight: bash


pyega3
======

.. conda:recipe:: pyega3
   :replaces_section_title:

   EGA python client

   :homepage: https://github.com/EGA-archive/ega-download-client
   :license: APACHE / Apache Software
   :recipe: /`pyega3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyega3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyega3/meta.yaml>`_

   


.. conda:package:: pyega3

   |downloads_pyega3| |docker_pyega3|

   :versions: 3.0.21

   :depends: :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`requests`  :conda:package:`tqdm`  

   :required~by: |required_by_pyega3|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyega3

   and update with::

      conda update pyega3

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyega3


.. |required_by_pyega3| conda:required_by:: pyega3
.. |downloads_pyega3| image:: https://img.shields.io/conda/dn/bioconda/pyega3.svg?style=flat
   :alt:   (downloads)
.. |docker_pyega3| image:: https://quay.io/repository/biocontainers/pyega3/status
   :target: https://quay.io/repository/biocontainers/pyega3







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyega3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyega3/README.html

