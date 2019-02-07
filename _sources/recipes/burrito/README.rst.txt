.. title:: Package Recipe 'burrito'
.. highlight: bash


burrito
=======

.. conda:recipe:: burrito/0.9.1
   :replaces_section_title:

   Framework for wrapping and controlling command\-line applications.

   :homepage: https://github.com/biocore/burrito
   :license: BSD License
   :recipe: /`burrito <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/burrito>`_/`0.9.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/burrito/0.9.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/burrito/0.9.1/meta.yaml>`_

   


.. conda:package:: burrito

   |downloads_burrito| |docker_burrito|

   :versions: 0.9.1

   :depends: :conda:package:`future`  :conda:package:`python` 2.7* 

   :required~by: |required_by_burrito|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install burrito

   and update with::

      conda update burrito

   or use the docker container::

      docker pull quay.io/repository/biocontainers/burrito


.. |required_by_burrito| conda:required_by:: burrito
.. |downloads_burrito| image:: https://img.shields.io/conda/dn/bioconda/burrito.svg?style=flat
   :alt:   (downloads)
.. |docker_burrito| image:: https://quay.io/repository/biocontainers/burrito/status
   :target: https://quay.io/repository/biocontainers/burrito







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/burrito/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/burrito/README.html

