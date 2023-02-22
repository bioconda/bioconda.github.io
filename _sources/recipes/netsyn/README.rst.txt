:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'netsyn'
.. highlight: bash

netsyn
======

.. conda:recipe:: netsyn
   :replaces_section_title:
   :noindex:

   NetSyn is a tool to detect conserved genomic contexts \(i.e. synteny conservation\) among a list of protein targets.

   :homepage: https://github.com/labgem/netsyn
   :license: OTHER / CeCiLL 2.1
   :recipe: /`netsyn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netsyn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netsyn/meta.yaml>`_

   


.. conda:package:: netsyn

   |downloads_netsyn| |docker_netsyn|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends biopython: 
   :depends jsonschema: 
   :depends markov_clustering: 
   :depends mmseqs2: ``>=9.d36de``
   :depends networkx: ``>=2.8``
   :depends python: ``>=3.8``
   :depends python-igraph: 
   :depends pyyaml: 
   :depends requests: 
   :depends urllib3: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install netsyn

   and update with::

      conda update netsyn

   or use the docker container::

      docker pull quay.io/biocontainers/netsyn:<tag>

   (see `netsyn/tags`_ for valid values for ``<tag>``)


.. |downloads_netsyn| image:: https://img.shields.io/conda/dn/bioconda/netsyn.svg?style=flat
   :target: https://anaconda.org/bioconda/netsyn
   :alt:   (downloads)
.. |docker_netsyn| image:: https://quay.io/repository/biocontainers/netsyn/status
   :target: https://quay.io/repository/biocontainers/netsyn
.. _`netsyn/tags`: https://quay.io/repository/biocontainers/netsyn?tab=tags


.. raw:: html

    <script>
        var package = "netsyn";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/netsyn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/netsyn/README.html