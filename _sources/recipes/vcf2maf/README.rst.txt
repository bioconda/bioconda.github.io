:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2maf'
.. highlight: bash

vcf2maf
=======

.. conda:recipe:: vcf2maf
   :replaces_section_title:
   :noindex:

   Convert a VCF into a MAF where each variant is annotated to only one of all possible gene isoforms.

   :homepage: https://github.com/mskcc/vcf2maf
   :license: APACHE / Apache-2.0
   :recipe: /`vcf2maf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2maf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2maf/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.593251`

   


.. conda:package:: vcf2maf

   |downloads_vcf2maf| |docker_vcf2maf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.22-2</code>,  <code>1.6.22-1</code>,  <code>1.6.22-0</code>,  <code>1.6.21-0</code>,  <code>1.6.20-1</code>,  <code>1.6.20-0</code>,  <code>1.6.19-1</code>,  <code>1.6.19-0</code>,  <code>1.6.18-2</code>,  </span></summary>
      

      ``1.6.22-2``,  ``1.6.22-1``,  ``1.6.22-0``,  ``1.6.21-0``,  ``1.6.20-1``,  ``1.6.20-0``,  ``1.6.19-1``,  ``1.6.19-0``,  ``1.6.18-2``,  ``1.6.18-1``,  ``1.6.18-0``,  ``1.6.17-2``,  ``1.6.17-1``,  ``1.6.17-0``,  ``1.6.16-4``,  ``1.6.16-3``,  ``1.6.16-0``,  ``1.6.15-1``,  ``1.6.15-0``,  ``1.6.14-0``,  ``1.6.12-0``,  ``1.6.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: 
   :depends on htslib: 
   :depends on perl: 
   :depends on samtools: 

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

    pixi global install vcf2maf

to add into an existing workspace instead, run::

    pixi add vcf2maf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcf2maf

Alternatively, to install into a new environment, run::

    conda create -n envname vcf2maf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcf2maf:<tag>

(see `vcf2maf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcf2maf| image:: https://img.shields.io/conda/dn/bioconda/vcf2maf.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2maf
   :alt:   (downloads)
.. |docker_vcf2maf| image:: https://quay.io/repository/biocontainers/vcf2maf/status
   :target: https://quay.io/repository/biocontainers/vcf2maf
.. _`vcf2maf/tags`: https://quay.io/repository/biocontainers/vcf2maf?tab=tags


.. raw:: html

    <script>
        var package = "vcf2maf";
        var versions = ["1.6.22","1.6.22","1.6.22","1.6.21","1.6.20"];
    </script>





Notes
-----
This package installs only vcf2maf and does not integrate with the variant\-effect\-predictor \(VEP\). To
do so\, please follow the instructions at https\:\/\/github.com\/mskcc\/vcf2maf\/blob\/master\/README.md.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2maf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2maf/README.html