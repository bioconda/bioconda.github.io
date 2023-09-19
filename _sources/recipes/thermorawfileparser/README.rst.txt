:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'thermorawfileparser'
.. highlight: bash

thermorawfileparser
===================

.. conda:recipe:: thermorawfileparser
   :replaces_section_title:
   :noindex:

   Wrapper around the .net \(C\#\) ThermoFisher ThermoRawFileReader library for running on Linux with mono

   :homepage: https://github.com/compomics/ThermoRawFileParser
   :documentation: https://github.com/compomics/ThermoRawFileParser/blob/master/README.md
   
   :license: APACHE / Apache Software
   :recipe: /`thermorawfileparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thermorawfileparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thermorawfileparser/meta.yaml>`_

   


.. conda:package:: thermorawfileparser

   |downloads_thermorawfileparser| |docker_thermorawfileparser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-4</code>,  <code>1.3.2-3</code>,  </span></summary>
      

      ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.4-0``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-4``,  ``1.3.2-3``,  ``1.3.2-2``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.11-0``,  ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.2-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``0.0.2018.09.07-1``,  ``0.0.2018.09.07-0``

      
      .. raw:: html

         </details>
      

   
   :depends mono: ``>=5``
   :depends zlib: 
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

      mamba install thermorawfileparser

   and update with::

      mamba update thermorawfileparser

  To create a new environment, run::

      mamba create --name myenvname thermorawfileparser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/thermorawfileparser:<tag>

   (see `thermorawfileparser/tags`_ for valid values for ``<tag>``)


.. |downloads_thermorawfileparser| image:: https://img.shields.io/conda/dn/bioconda/thermorawfileparser.svg?style=flat
   :target: https://anaconda.org/bioconda/thermorawfileparser
   :alt:   (downloads)
.. |docker_thermorawfileparser| image:: https://quay.io/repository/biocontainers/thermorawfileparser/status
   :target: https://quay.io/repository/biocontainers/thermorawfileparser
.. _`thermorawfileparser/tags`: https://quay.io/repository/biocontainers/thermorawfileparser?tab=tags


.. raw:: html

    <script>
        var package = "thermorawfileparser";
        var versions = ["1.4.3","1.4.2","1.4.1","1.4.0","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/thermorawfileparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/thermorawfileparser/README.html