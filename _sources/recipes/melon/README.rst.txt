:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'melon'
.. highlight: bash

melon
=====

.. conda:recipe:: melon
   :replaces_section_title:
   :noindex:

   Melon\: metagenomic long\-read\-based taxonomic identification and quantification using marker genes

   :homepage: https://github.com/xinehc/melon
   :license: MIT / MIT
   :recipe: /`melon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/melon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/melon/meta.yaml>`_

   


.. conda:package:: melon

   |downloads_melon| |docker_melon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-0</code>,  <code>0.2.5-0</code>,  <code>0.2.4-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.6-0</code>,  <code>0.1.5-0</code>,  </span></summary>
      

      ``0.3.0-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on diamond: ``>=2.1.8``
   :depends on kraken2: 
   :depends on minimap2: ``>=2.26``
   :depends on numpy: 
   :depends on python: ``>=3.7``
   :depends on rich-argparse: 
   :depends on scipy: 
   :depends on seqkit: 
   :depends on tqdm: 

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

    pixi global install melon

to add into an existing workspace instead, run::

    pixi add melon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install melon

Alternatively, to install into a new environment, run::

    conda create -n envname melon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/melon:<tag>

(see `melon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_melon| image:: https://img.shields.io/conda/dn/bioconda/melon.svg?style=flat
   :target: https://anaconda.org/bioconda/melon
   :alt:   (downloads)
.. |docker_melon| image:: https://quay.io/repository/biocontainers/melon/status
   :target: https://quay.io/repository/biocontainers/melon
.. _`melon/tags`: https://quay.io/repository/biocontainers/melon?tab=tags


.. raw:: html

    <script>
        var package = "melon";
        var versions = ["0.3.0","0.2.5","0.2.4","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/melon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/melon/README.html