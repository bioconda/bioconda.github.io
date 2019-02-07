.. title:: Package Recipe 'pysvg'
.. highlight: bash


pysvg
=====

.. conda:recipe:: pysvg
   :replaces_section_title:

   Python SVG Library

   :homepage: http://codeboje.de/pysvg/
   :license: BSD / BSD License
   :recipe: /`pysvg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysvg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysvg/meta.yaml>`_

   


.. conda:package:: pysvg

   |downloads_pysvg| |docker_pysvg|

   :versions: 0.2.2

   :depends: :conda:package:`cssselect`  :conda:package:`lxml` >=2.1 :conda:package:`python` 2.7* 

   :required~by: |required_by_pysvg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pysvg

   and update with::

      conda update pysvg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pysvg


.. |required_by_pysvg| conda:required_by:: pysvg
.. |downloads_pysvg| image:: https://img.shields.io/conda/dn/bioconda/pysvg.svg?style=flat
   :alt:   (downloads)
.. |docker_pysvg| image:: https://quay.io/repository/biocontainers/pysvg/status
   :target: https://quay.io/repository/biocontainers/pysvg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysvg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysvg/README.html

