:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'learnmsa'
.. highlight: bash

learnmsa
========

.. conda:recipe:: learnmsa
   :replaces_section_title:
   :noindex:

   learnMSA\: Learning and Aligning large Protein Families

   :homepage: https://github.com/Gaius-Augustus/learnMSA
   :license: MIT / MIT
   :recipe: /`learnmsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/learnmsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/learnmsa/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/giac104`, biotools: :biotools:`learnMSA`

   


.. conda:package:: learnmsa

   |downloads_learnmsa| |docker_learnmsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.16-0</code>,  <code>2.0.15-0</code>,  <code>2.0.14-0</code>,  <code>2.0.13-0</code>,  <code>2.0.12-0</code>,  <code>2.0.11-0</code>,  <code>2.0.10-0</code>,  <code>2.0.1-0</code>,  <code>1.3.4-0</code>,  </span></summary>
      

      ``2.0.16-0``,  ``2.0.15-0``,  ``2.0.14-0``,  ``2.0.13-0``,  ``2.0.12-0``,  ``2.0.11-0``,  ``2.0.10-0``,  ``2.0.1-0``,  ``1.3.4-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.4-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.69``
   :depends on imageio: 
   :depends on logomaker: 
   :depends on mmseqs2: 
   :depends on networkx: 
   :depends on pyfamsa: 
   :depends on python: ``3.12.*``
   :depends on pytorch: ``2.6.*``
   :depends on seaborn: 
   :depends on sentencepiece: 
   :depends on tensorflow: ``2.18.*``
   :depends on tf-keras: ``2.18.*``
   :depends on transformers: 

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

    pixi global install learnmsa

to add into an existing workspace instead, run::

    pixi add learnmsa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install learnmsa

Alternatively, to install into a new environment, run::

    conda create -n envname learnmsa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/learnmsa:<tag>

(see `learnmsa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_learnmsa| image:: https://img.shields.io/conda/dn/bioconda/learnmsa.svg?style=flat
   :target: https://anaconda.org/bioconda/learnmsa
   :alt:   (downloads)
.. |docker_learnmsa| image:: https://quay.io/repository/biocontainers/learnmsa/status
   :target: https://quay.io/repository/biocontainers/learnmsa
.. _`learnmsa/tags`: https://quay.io/repository/biocontainers/learnmsa?tab=tags


.. raw:: html

    <script>
        var package = "learnmsa";
        var versions = ["2.0.16","2.0.15","2.0.14","2.0.13","2.0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/learnmsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/learnmsa/README.html