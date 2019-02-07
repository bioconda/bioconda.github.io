.. title:: Package Recipe 'yanc'
.. highlight: bash


yanc
====

.. conda:recipe:: yanc
   :replaces_section_title:

   Yet another nose colorer

   :homepage: https://github.com/0compute/yanc
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`yanc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yanc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yanc/meta.yaml>`_

   


.. conda:package:: yanc

   |downloads_yanc| |docker_yanc|

   :versions: 0.3.3

   :depends: :conda:package:`python` 2.7* :conda:package:`setuptools`  

   :required~by: |required_by_yanc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yanc

   and update with::

      conda update yanc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/yanc


.. |required_by_yanc| conda:required_by:: yanc
.. |downloads_yanc| image:: https://img.shields.io/conda/dn/bioconda/yanc.svg?style=flat
   :alt:   (downloads)
.. |docker_yanc| image:: https://quay.io/repository/biocontainers/yanc/status
   :target: https://quay.io/repository/biocontainers/yanc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yanc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yanc/README.html

