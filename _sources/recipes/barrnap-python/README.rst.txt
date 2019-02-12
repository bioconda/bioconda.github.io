:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barrnap-python'
.. highlight: bash

barrnap-python
==============

.. conda:recipe:: barrnap-python
   :replaces_section_title:

   python package for Torsten Seemann\'s barrnap package for annotating rRNAs

   :homepage: https://github.com/nickp60/barrnap-python
   :license: GPL3 / GNU General Public License v3.0
   :recipe: /`barrnap-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barrnap-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barrnap-python/meta.yaml>`_

   Original Perl code can be found at the projects homepage here\: https\:\/\/github.com\/tseemann\/barrnap


.. conda:package:: barrnap-python

   |downloads_barrnap-python| |docker_barrnap-python|

   :versions: 0.0.5-1, 0.0.5-0
   
   :depends barrnap: >=0.8
   
   :depends python: >=3.5,<3.6.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install barrnap-python

   and update with::

      conda update barrnap-python

   or use the docker container::

      docker pull quay.io/repository/biocontainers/barrnap-python:<tag>

   (see `barrnap-python/tags`_ for valid values for ``<tag>``)


.. |downloads_barrnap-python| image:: https://img.shields.io/conda/dn/bioconda/barrnap-python.svg?style=flat
   :alt:   (downloads)
.. |docker_barrnap-python| image:: https://quay.io/repository/biocontainers/barrnap-python/status
   :target: https://quay.io/repository/biocontainers/barrnap-python
.. _`barrnap-python/tags`: https://quay.io/repository/biocontainers/barrnap-python?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barrnap-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barrnap-python/README.html