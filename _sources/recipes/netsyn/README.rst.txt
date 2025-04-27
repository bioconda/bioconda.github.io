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
      
      

      ``1.0.0-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
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

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install netsyn

   and update with::

      mamba update netsyn

  To create a new environment, run::

      mamba create --name myenvname netsyn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.0.0","0.1.2","0.1.1"];
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