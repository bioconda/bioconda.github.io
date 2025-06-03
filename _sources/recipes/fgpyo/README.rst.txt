:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgpyo'
.. highlight: bash

fgpyo
=====

.. conda:recipe:: fgpyo
   :replaces_section_title:
   :noindex:

   Python bioinformatics and genomics library

   :homepage: https://pypi.org/project/fgpyo/
   :documentation: https://fgpyo.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/fulcrumgenomics/fgpyo
   :license: MIT / MIT
   :recipe: /`fgpyo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgpyo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgpyo/meta.yaml>`_
   :links: DOI: :DOI:`10.5281/zenodo.10694617`

   


.. conda:package:: fgpyo

   |downloads_fgpyo| |docker_fgpyo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.8.0-0</code>,  <code>0.7.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  </span></summary>
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.0-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends attrs: ``>=19.3.0``
   :depends pysam: ``>=0.22.0``
   :depends pytest: ``>=7.4.0``
   :depends python: ``>=3.8``
   :depends strenum: ``>=0.4.15,<0.5``
   :depends typing_extensions: ``>=3.7.4``
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

      mamba install fgpyo

   and update with::

      mamba update fgpyo

  To create a new environment, run::

      mamba create --name myenvname fgpyo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fgpyo:<tag>

   (see `fgpyo/tags`_ for valid values for ``<tag>``)


.. |downloads_fgpyo| image:: https://img.shields.io/conda/dn/bioconda/fgpyo.svg?style=flat
   :target: https://anaconda.org/bioconda/fgpyo
   :alt:   (downloads)
.. |docker_fgpyo| image:: https://quay.io/repository/biocontainers/fgpyo/status
   :target: https://quay.io/repository/biocontainers/fgpyo
.. _`fgpyo/tags`: https://quay.io/repository/biocontainers/fgpyo?tab=tags


.. raw:: html

    <script>
        var package = "fgpyo";
        var versions = ["1.2.0","1.2.0","1.1.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgpyo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgpyo/README.html