:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyprophet'
.. highlight: bash

pyprophet
=========

.. conda:recipe:: pyprophet
   :replaces_section_title:

   Python reimplementation of mProphet peak scoring

   :homepage: http://github.com/uweschmitt/pyprophet
   :license: BSD / BSD License
   :recipe: /`pyprophet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyprophet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyprophet/meta.yaml>`_

   


.. conda:package:: pyprophet

   |downloads_pyprophet| |docker_pyprophet|

   :versions: 0.24.1-1, 0.24.1-0, 0.22.0-0
   
   :depends matplotlib: 
   :depends numexpr: >=2.1
   :depends numpy: >=1.9.0
   :depends pandas: >=0.17
   :depends python: >=2.7,<2.8.0a0
   :depends scikit-learn: >=0.17
   :depends scipy: >=0.9.0
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyprophet

   and update with::

      conda update pyprophet

   or use the docker container::

      docker pull quay.io/biocontainers/pyprophet:<tag>

   (see `pyprophet/tags`_ for valid values for ``<tag>``)


.. |downloads_pyprophet| image:: https://img.shields.io/conda/dn/bioconda/pyprophet.svg?style=flat
   :alt:   (downloads)
.. |docker_pyprophet| image:: https://quay.io/repository/biocontainers/pyprophet/status
   :target: https://quay.io/repository/biocontainers/pyprophet
.. _`pyprophet/tags`: https://quay.io/repository/biocontainers/pyprophet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyprophet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyprophet/README.html