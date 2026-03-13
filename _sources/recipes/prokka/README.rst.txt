:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prokka'
.. highlight: bash

prokka
======

.. conda:recipe:: prokka
   :replaces_section_title:
   :noindex:

   Rapid annotation of prokaryotic genomes

   :homepage: https://github.com/tseemann/prokka
   :license: GPL / GPL-3.0-only
   :recipe: /`prokka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokka/meta.yaml>`_
   :links: biotools: :biotools:`prokka`, doi: :doi:`10.1093/bioinformatics/btu153`, usegalaxy-eu: :usegalaxy-eu:`prokka`

   


.. conda:package:: prokka

   |downloads_prokka| |docker_prokka|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.15.6-0</code>,  <code>1.14.6-5</code>,  <code>1.14.6-4</code>,  <code>1.14.6-3</code>,  <code>1.14.6-2</code>,  <code>1.14.6-1</code>,  <code>1.14.6-0</code>,  <code>1.14.5-1</code>,  <code>1.14.5-0</code>,  </span></summary>
      

      ``1.15.6-0``,  ``1.14.6-5``,  ``1.14.6-4``,  ``1.14.6-3``,  ``1.14.6-2``,  ``1.14.6-1``,  ``1.14.6-0``,  ``1.14.5-1``,  ``1.14.5-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.13.7-0``,  ``1.13.4-0``,  ``1.13.3-0``,  ``1.13-4``,  ``1.13-3``,  ``1.13-2``,  ``1.13-1``,  ``1.13-0``,  ``1.12-4``,  ``1.12-3``,  ``1.12-2``,  ``1.12-1``,  ``1.12-0``,  ``1.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aragorn: ``>=1.2``
   :depends on barrnap: ``>=0.7``
   :depends on blast: ``>=2.7.1``
   :depends on hmmer: ``>=3.1b2``
   :depends on infernal: ``>=1.1.2``
   :depends on minced: ``>=0.3``
   :depends on parallel: ``>=20180522``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bioperl: ``>=1.7.2``
   :depends on perl-xml-simple: 
   :depends on prodigal: ``>=2.6``
   :depends on tbl2asn-forever: ``>=25.7``

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

    pixi global install prokka

to add into an existing workspace instead, run::

    pixi add prokka

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install prokka

Alternatively, to install into a new environment, run::

    conda create -n envname prokka

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/prokka:<tag>

(see `prokka/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_prokka| image:: https://img.shields.io/conda/dn/bioconda/prokka.svg?style=flat
   :target: https://anaconda.org/bioconda/prokka
   :alt:   (downloads)
.. |docker_prokka| image:: https://quay.io/repository/biocontainers/prokka/status
   :target: https://quay.io/repository/biocontainers/prokka
.. _`prokka/tags`: https://quay.io/repository/biocontainers/prokka?tab=tags


.. raw:: html

    <script>
        var package = "prokka";
        var versions = ["1.15.6","1.14.6","1.14.6","1.14.6","1.14.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prokka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prokka/README.html