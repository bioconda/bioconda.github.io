:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sistr_cmd'
.. highlight: bash

sistr_cmd
=========

.. conda:recipe:: sistr_cmd
   :replaces_section_title:
   :noindex:

   Salmonella In Silico Typing Resource \(SISTR\) commandline tool for serovar prediction

   :homepage: https://github.com/peterk87/sistr_cmd/
   :license: APACHE / Apache-2.0
   :recipe: /`sistr_cmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sistr_cmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sistr_cmd/meta.yaml>`_

   


.. conda:package:: sistr_cmd

   |downloads_sistr_cmd| |docker_sistr_cmd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-3</code>,  <code>1.1.1-2</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.2-5</code>,  <code>1.0.2-4</code>,  <code>1.0.2-3</code>,  <code>1.0.2-2</code>,  </span></summary>
      

      ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-0``,  ``0.3.6-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends mafft: 
   :depends mash: 
   :depends numpy: ``>=1.11.1,<1.23.5``
   :depends pandas: ``>=0.18.1,<=1.0.5``
   :depends pycurl: ``>=7.43.0,<8``
   :depends pytables: ``>=3.3.0``
   :depends python: 
   :depends python-dateutil: 
   :depends scipy: ``>=1.1.0,<2``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sistr_cmd

   and update with::

      mamba update sistr_cmd

  To create a new environment, run::

      mamba create --name myenvname sistr_cmd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sistr_cmd:<tag>

   (see `sistr_cmd/tags`_ for valid values for ``<tag>``)


.. |downloads_sistr_cmd| image:: https://img.shields.io/conda/dn/bioconda/sistr_cmd.svg?style=flat
   :target: https://anaconda.org/bioconda/sistr_cmd
   :alt:   (downloads)
.. |docker_sistr_cmd| image:: https://quay.io/repository/biocontainers/sistr_cmd/status
   :target: https://quay.io/repository/biocontainers/sistr_cmd
.. _`sistr_cmd/tags`: https://quay.io/repository/biocontainers/sistr_cmd?tab=tags


.. raw:: html

    <script>
        var package = "sistr_cmd";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sistr_cmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sistr_cmd/README.html