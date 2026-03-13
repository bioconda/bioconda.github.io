:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pftools'
.. highlight: bash

pftools
=======

.. conda:recipe:: pftools
   :replaces_section_title:
   :noindex:

   A generalized profile syntax for biomolecular sequence motifs and its function in automatic sequence interpretation.

   :homepage: https://github.com/sib-swiss/pftools3
   :documentation: https://web.expasy.org/pftools
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`pftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pftools/meta.yaml>`_

   


.. conda:package:: pftools

   |downloads_pftools| |docker_pftools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.13-0</code>,  <code>3.2.12-5</code>,  <code>3.2.12-4</code>,  <code>3.2.12-3</code>,  <code>3.2.12-2</code>,  <code>3.2.12-1</code>,  <code>3.2.12-0</code>,  <code>3.2.11-2</code>,  <code>3.2.11-1</code>,  </span></summary>
      

      ``3.2.13-0``,  ``3.2.12-5``,  ``3.2.12-4``,  ``3.2.12-3``,  ``3.2.12-2``,  ``3.2.12-1``,  ``3.2.12-0``,  ``3.2.11-2``,  ``3.2.11-1``,  ``3.2.11-0``,  ``3.2.10-0``,  ``2.3.5-1``,  ``2.3.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.4.0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pcre2: ``>=10.44,<10.45.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-file-slurp: ``9999.32.*``
   :depends on r-base: ``>=4.4,<4.5.0a0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install pftools

to add into an existing workspace instead, run::

    pixi add pftools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pftools

Alternatively, to install into a new environment, run::

    conda create -n envname pftools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pftools:<tag>

(see `pftools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pftools| image:: https://img.shields.io/conda/dn/bioconda/pftools.svg?style=flat
   :target: https://anaconda.org/bioconda/pftools
   :alt:   (downloads)
.. |docker_pftools| image:: https://quay.io/repository/biocontainers/pftools/status
   :target: https://quay.io/repository/biocontainers/pftools
.. _`pftools/tags`: https://quay.io/repository/biocontainers/pftools?tab=tags


.. raw:: html

    <script>
        var package = "pftools";
        var versions = ["3.2.13","3.2.12","3.2.12","3.2.12","3.2.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pftools/README.html