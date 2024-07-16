:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pia'
.. highlight: bash

pia
===

.. conda:recipe:: pia
   :replaces_section_title:
   :noindex:

   PIA is a toolbox for MS based protein inference and identification analysis.

   :homepage: https://github.com/medbioinf/pia
   :license: BSD-3-Clause
   :recipe: /`pia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pia/meta.yaml>`_
   :links: biotools: :biotools:`pia`, doi: :doi:`10.1021/acs.jproteome.5b00121`

   PIA allows you to inspect the results of common proteomics spectrum identification
   search engines\, combine them seamlessly and conduct statistical analyses. The main
   focus of PIA lays on the integrated inference algorithms\, i.e. concluding the proteins
   from a set of identified spectra. But it also allows you to inspect your peptide
   spectrum matches\, calculate FDR values across different search engine results and
   visualize the correspondence between PSMs\, peptides and proteins.



.. conda:package:: pia

   |downloads_pia| |docker_pia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.10-1</code>,  <code>1.4.10-0</code>,  <code>1.4.9-0</code>,  </span></summary>
      

      ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.10-1``,  ``1.4.10-0``,  ``1.4.9-0``,  ``1.4.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=21``
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

      mamba install pia

   and update with::

      mamba update pia

  To create a new environment, run::

      mamba create --name myenvname pia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pia:<tag>

   (see `pia/tags`_ for valid values for ``<tag>``)


.. |downloads_pia| image:: https://img.shields.io/conda/dn/bioconda/pia.svg?style=flat
   :target: https://anaconda.org/bioconda/pia
   :alt:   (downloads)
.. |docker_pia| image:: https://quay.io/repository/biocontainers/pia/status
   :target: https://quay.io/repository/biocontainers/pia
.. _`pia/tags`: https://quay.io/repository/biocontainers/pia?tab=tags


.. raw:: html

    <script>
        var package = "pia";
        var versions = ["1.5.5","1.5.4","1.5.3","1.5.2","1.5.1"];
    </script>





Notes
-----
PIA is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"pia\" and is on \$PATH by default. By default
\"\-Xms2g \-Xmx4g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"pia \-Xms512m \-Xmx2g\" for a lower memory footprint.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pia/README.html