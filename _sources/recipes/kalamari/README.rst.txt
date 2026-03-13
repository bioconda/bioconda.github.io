:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kalamari'
.. highlight: bash

kalamari
========

.. conda:recipe:: kalamari
   :replaces_section_title:
   :noindex:

   A curated database of completed assemblies with taxonomy IDs

   :homepage: https://github.com/lskatz/kalamari
   :documentation: https://github.com/lskatz/Kalamari/blob/master/README.md
   
   :developer docs: https://github.com/lskatz/Kalamari
   :license: MIT / MIT
   :recipe: /`kalamari <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalamari>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalamari/meta.yaml>`_

   Kalamari is a curated database of assemblies and taxonomies.
   These assemblies are curated mainly for foodborne bacteria but have other taxa
   such as SARS\-CoV\-2 and Crytposporidium.
   Taxonomy has been modified from NCBI Taxonomy and has been minimalized to
   just what is needed here.



.. conda:package:: kalamari

   |downloads_kalamari| |docker_kalamari|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.8.3-1</code>,  <code>5.8.3-0</code>,  <code>5.8.2-0</code>,  <code>5.8.0-0</code>,  <code>5.7.2-0</code>,  <code>5.7.1-0</code>,  <code>5.7.0-0</code>,  <code>5.6.3-0</code>,  <code>5.6.2-0</code>,  </span></summary>
      

      ``5.8.3-1``,  ``5.8.3-0``,  ``5.8.2-0``,  ``5.8.0-0``,  ``5.7.2-0``,  ``5.7.1-0``,  ``5.7.0-0``,  ``5.6.3-0``,  ``5.6.2-0``,  ``5.6.1-0``,  ``5.6.0-2``,  ``5.6.0-0``,  ``5.5.0-0``,  ``5.4.1-1``,  ``5.4.1-0``,  ``5.4.0-0``,  ``5.3.3-0``,  ``5.3.2-0``,  ``5.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on entrez-direct: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-module-build: 

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

    pixi global install kalamari

to add into an existing workspace instead, run::

    pixi add kalamari

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kalamari

Alternatively, to install into a new environment, run::

    conda create -n envname kalamari

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kalamari:<tag>

(see `kalamari/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kalamari| image:: https://img.shields.io/conda/dn/bioconda/kalamari.svg?style=flat
   :target: https://anaconda.org/bioconda/kalamari
   :alt:   (downloads)
.. |docker_kalamari| image:: https://quay.io/repository/biocontainers/kalamari/status
   :target: https://quay.io/repository/biocontainers/kalamari
.. _`kalamari/tags`: https://quay.io/repository/biocontainers/kalamari?tab=tags


.. raw:: html

    <script>
        var package = "kalamari";
        var versions = ["5.8.3","5.8.3","5.8.2","5.8.0","5.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kalamari/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kalamari/README.html