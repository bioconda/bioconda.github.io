:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfaidx'
.. highlight: bash

pyfaidx
=======

.. conda:recipe:: pyfaidx
   :replaces_section_title:
   :noindex:

   pyfaidx\: efficient pythonic random access to fasta subsequences

   :homepage: https://github.com/mdshw5/pyfaidx/
   :documentation: https://pythonhosted.org/pyfaidx/
   
   :license: BSD / BSD License
   :recipe: /`pyfaidx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfaidx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfaidx/meta.yaml>`_
   :links: biotools: :biotools:`pyfaidx`, doi: :doi:`10.7287/peerj.preprints.970v1`

   


.. conda:package:: pyfaidx

   |downloads_pyfaidx| |docker_pyfaidx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.1.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.2.2-0</code>,  <code>0.7.2.1-1</code>,  <code>0.7.2.1-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.4-0</code>,  </span></summary>
      

      ``0.8.1.1-0``,  ``0.8.0-0``,  ``0.7.2.2-0``,  ``0.7.2.1-1``,  ``0.7.2.1-0``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.4-0``,  ``0.6.3.1-1``,  ``0.6.3.1-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.9.5-0``,  ``0.5.9.4-0``,  ``0.5.9.2-0``,  ``0.5.9.1-1``,  ``0.5.9.1-0``,  ``0.5.9-1``,  ``0.5.9-0``,  ``0.5.8-1``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5.2-1``,  ``0.5.5.2-0``,  ``0.5.4.1-0``,  ``0.5.3-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.9.2-0``,  ``0.4.8.1-4``,  ``0.4.8.1-3``,  ``0.4.8.1-2``,  ``0.4.8.1-0``,  ``0.4.7.1-3``,  ``0.4.7.1-2``,  ``0.4.7.1-0``,  ``0.4.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends importlib-metadata: 
   :depends packaging: 
   :depends python: ``>=3.7``
   :depends pyvcf3: 
   :depends setuptools: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pyfaidx

   and update with::

      mamba update pyfaidx

  To create a new environment, run::

      mamba create --name myenvname pyfaidx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyfaidx:<tag>

   (see `pyfaidx/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfaidx| image:: https://img.shields.io/conda/dn/bioconda/pyfaidx.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfaidx
   :alt:   (downloads)
.. |docker_pyfaidx| image:: https://quay.io/repository/biocontainers/pyfaidx/status
   :target: https://quay.io/repository/biocontainers/pyfaidx
.. _`pyfaidx/tags`: https://quay.io/repository/biocontainers/pyfaidx?tab=tags


.. raw:: html

    <script>
        var package = "pyfaidx";
        var versions = ["0.8.1.1","0.8.0","0.7.2.2","0.7.2.1","0.7.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfaidx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfaidx/README.html