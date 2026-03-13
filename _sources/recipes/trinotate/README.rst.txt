:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trinotate'
.. highlight: bash

trinotate
=========

.. conda:recipe:: trinotate
   :replaces_section_title:
   :noindex:

   Trinotate is a comprehensive annotation suite designed for automatic functional annotation of transcriptomes\, particularly de novo assembled transcriptomes\, from model or non\-model organisms

   :homepage: https://trinotate.github.io/
   :license: BSD-3-Clause
   :recipe: /`trinotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinotate/meta.yaml>`_
   :links: biotools: :biotools:`trinotate`, usegalaxy-eu: :usegalaxy-eu:`trinotate`

   


.. conda:package:: trinotate

   |downloads_trinotate| |docker_trinotate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.2-0</code>,  <code>4.0.1-0</code>,  <code>4.0.0-0</code>,  <code>3.2.2-1</code>,  <code>3.2.2-0</code>,  <code>3.2.1-1</code>,  <code>3.2.1-0</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  </span></summary>
      

      ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.2.2-1``,  ``3.2.2-0``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.1-7``,  ``3.1.1-6``,  ``3.1.1-5``,  ``3.1.1-4``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: 
   :depends on diamond: 
   :depends on hmmer: 
   :depends on infernal: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-app-cpanminus: 
   :depends on perl-dbd-sqlite: 
   :depends on perl-dbi: 
   :depends on perl-file-find-rule: 
   :depends on perl-module-build: 
   :depends on sqlite: 
   :depends on wget: 

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

    pixi global install trinotate

to add into an existing workspace instead, run::

    pixi add trinotate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trinotate

Alternatively, to install into a new environment, run::

    conda create -n envname trinotate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trinotate:<tag>

(see `trinotate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trinotate| image:: https://img.shields.io/conda/dn/bioconda/trinotate.svg?style=flat
   :target: https://anaconda.org/bioconda/trinotate
   :alt:   (downloads)
.. |docker_trinotate| image:: https://quay.io/repository/biocontainers/trinotate/status
   :target: https://quay.io/repository/biocontainers/trinotate
.. _`trinotate/tags`: https://quay.io/repository/biocontainers/trinotate?tab=tags


.. raw:: html

    <script>
        var package = "trinotate";
        var versions = ["4.0.2","4.0.1","4.0.0","3.2.2","3.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trinotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trinotate/README.html