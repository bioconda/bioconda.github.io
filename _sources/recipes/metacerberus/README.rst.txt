:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacerberus'
.. highlight: bash

metacerberus
============

.. conda:recipe:: metacerberus
   :replaces_section_title:
   :noindex:

   Versatile Functional Ontology Assignments for Metagenomes via Hidden Markov Model \(HMM\) searching with environmental focus of shotgun meta\'omics data

   :homepage: https://github.com/raw-lab/metacerberus
   :license: BSD / BSD-3-Clause
   :recipe: /`metacerberus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacerberus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacerberus/meta.yaml>`_

   


.. conda:package:: metacerberus

   |downloads_metacerberus| |docker_metacerberus|

   :versions:
      
      

      ``1.0-0``,  ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends bbmap: 
   :depends configargparse: 
   :depends dominate: 
   :depends fastp: 
   :depends fastqc: 
   :depends flash2: 
   :depends gcc: 
   :depends git: 
   :depends gitpython: 
   :depends grpcio: 
   :depends hmmer: 
   :depends make: 
   :depends metaomestats: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends porechop: 
   :depends prodigal: 
   :depends psutil: 
   :depends python: 
   :depends python-kaleido: 
   :depends ray-core: 
   :depends ray-dashboard: 
   :depends ray-default: 
   :depends scikit-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metacerberus

   and update with::

      conda update metacerberus

   or use the docker container::

      docker pull quay.io/biocontainers/metacerberus:<tag>

   (see `metacerberus/tags`_ for valid values for ``<tag>``)


.. |downloads_metacerberus| image:: https://img.shields.io/conda/dn/bioconda/metacerberus.svg?style=flat
   :target: https://anaconda.org/bioconda/metacerberus
   :alt:   (downloads)
.. |docker_metacerberus| image:: https://quay.io/repository/biocontainers/metacerberus/status
   :target: https://quay.io/repository/biocontainers/metacerberus
.. _`metacerberus/tags`: https://quay.io/repository/biocontainers/metacerberus?tab=tags


.. raw:: html

    <script>
        var package = "metacerberus";
        var versions = ["1.0","0.2","0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacerberus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacerberus/README.html