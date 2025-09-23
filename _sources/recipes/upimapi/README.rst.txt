:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'upimapi'
.. highlight: bash

upimapi
=======

.. conda:recipe:: upimapi
   :replaces_section_title:
   :noindex:

   UniProt Id Mapping through API

   :homepage: https://github.com/iquasere/UPIMAPI
   :documentation: https://github.com/iquasere/UPIMAPI/blob/master/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`upimapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/upimapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/upimapi/meta.yaml>`_

   UPIMAPI takes as input either a list of UniProt IDs or a blast file from
   annotation using UniProt database as reference and uses UniProt\'s API to
   retrieve information relative to those IDs. It is essentially a command
   line implementation of UniProt\'s ID mapping web service available at
   https\:\/\/www.uniprot.org\/uploadlists\/\, allowing for retrieval of information
   from thousands of IDs in one go\, while still relying on the web service.



.. conda:package:: upimapi

   |downloads_upimapi| |docker_upimapi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.13.3-0</code>,  <code>1.13.1-0</code>,  <code>1.13.0-0</code>,  <code>1.12.3-0</code>,  <code>1.12.2-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  <code>1.11.2-0</code>,  <code>1.11.1-0</code>,  </span></summary>
      

      ``1.13.3-0``,  ``1.13.1-0``,  ``1.13.0-0``,  ``1.12.3-0``,  ``1.12.2-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.11.2-0``,  ``1.11.1-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.14-0``,  ``1.8.13-0``,  ``1.8.12-0``,  ``1.8.11-0``,  ``1.8.10-0``,  ``1.8.9-0``,  ``1.8.8-0``,  ``1.8.7-0``,  ``1.8.6-0``,  ``1.8.5-0``,  ``1.8.4-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends diamond: 
   :depends pandas: 
   :depends psutil: 
   :depends pyyaml: 
   :depends requests: 
   :depends tqdm: 
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

      mamba install upimapi

   and update with::

      mamba update upimapi

  To create a new environment, run::

      mamba create --name myenvname upimapi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/upimapi:<tag>

   (see `upimapi/tags`_ for valid values for ``<tag>``)


.. |downloads_upimapi| image:: https://img.shields.io/conda/dn/bioconda/upimapi.svg?style=flat
   :target: https://anaconda.org/bioconda/upimapi
   :alt:   (downloads)
.. |docker_upimapi| image:: https://quay.io/repository/biocontainers/upimapi/status
   :target: https://quay.io/repository/biocontainers/upimapi
.. _`upimapi/tags`: https://quay.io/repository/biocontainers/upimapi?tab=tags


.. raw:: html

    <script>
        var package = "upimapi";
        var versions = ["1.13.3","1.13.1","1.13.0","1.12.3","1.12.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/upimapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/upimapi/README.html