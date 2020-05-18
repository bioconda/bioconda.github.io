:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrpipe'
.. highlight: bash

pyrpipe
=======

.. conda:recipe:: pyrpipe
   :replaces_section_title:

   pyrpipe is a lightweight python package for RNA\-Seq workflows.

   :homepage: https://github.com/urmi-21/pyrpipe
   :documentation: https://pyrpipe.readthedocs.io/en/latest/?badge=latest
   
   :license: MIT / MIT
   :recipe: /`pyrpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrpipe/meta.yaml>`_

   


.. conda:package:: pyrpipe

   |downloads_pyrpipe| |docker_pyrpipe|

   :versions: 0.0.4-0
   
   :depends dill: 
   :depends importlib_resources: 
   :depends jinja2: 
   :depends multiqc: 
   :depends python: >=3
   :depends pyyaml: 
   :depends seaborn: 
   :depends weasyprint: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyrpipe

   and update with::

      conda update pyrpipe

   or use the docker container::

      docker pull quay.io/biocontainers/pyrpipe:<tag>

   (see `pyrpipe/tags`_ for valid values for ``<tag>``)


.. |downloads_pyrpipe| image:: https://img.shields.io/conda/dn/bioconda/pyrpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrpipe
   :alt:   (downloads)
.. |docker_pyrpipe| image:: https://quay.io/repository/biocontainers/pyrpipe/status
   :target: https://quay.io/repository/biocontainers/pyrpipe
.. _`pyrpipe/tags`: https://quay.io/repository/biocontainers/pyrpipe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrpipe/README.html