:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-nextflow'
.. highlight: bash

python-nextflow
===============

.. conda:recipe:: python-nextflow
   :replaces_section_title:
   :noindex:

   Python module to run Nextflow pipelines

   :homepage: https://github.com/goodwright/nextflow.py/
   :license: MIT
   :recipe: /`python-nextflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-nextflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-nextflow/meta.yaml>`_

   


.. conda:package:: python-nextflow

   |downloads_python-nextflow| |docker_python-nextflow|

   :versions:
      
      

      ``0.4-0``

      

   
   :depends nextflow: 
   :depends python: ``>=3.6,<3.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-nextflow

   and update with::

      conda update python-nextflow

   or use the docker container::

      docker pull quay.io/biocontainers/python-nextflow:<tag>

   (see `python-nextflow/tags`_ for valid values for ``<tag>``)


.. |downloads_python-nextflow| image:: https://img.shields.io/conda/dn/bioconda/python-nextflow.svg?style=flat
   :target: https://anaconda.org/bioconda/python-nextflow
   :alt:   (downloads)
.. |docker_python-nextflow| image:: https://quay.io/repository/biocontainers/python-nextflow/status
   :target: https://quay.io/repository/biocontainers/python-nextflow
.. _`python-nextflow/tags`: https://quay.io/repository/biocontainers/python-nextflow?tab=tags


.. raw:: html

    <script>
        var package = "python-nextflow";
        var versions = ["0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-nextflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-nextflow/README.html