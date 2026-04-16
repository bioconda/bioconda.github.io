:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ltr_finder'
.. highlight: bash

ltr_finder
==========

.. conda:recipe:: ltr_finder
   :replaces_section_title:
   :noindex:

   LTR\_Finder is an efficient program for finding full\-length LTR retrotranspsons in genome sequences.

   :homepage: https://github.com/NBISweden/LTR_Finder
   :license: MIT / MIT
   :recipe: /`ltr_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_finder/meta.yaml>`_

   


.. conda:package:: ltr_finder

   |downloads_ltr_finder| |docker_ltr_finder|

   :versions:
      
      

      ``1.07-5``,  ``1.07-4``,  ``1.07-3``,  ``1.07-2``,  ``1.07-1``,  ``1.07-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on perl: 
   :depends on perl-gd: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install ltr_finder

to add into an existing workspace instead, run::

    pixi add ltr_finder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ltr_finder

Alternatively, to install into a new environment, run::

    conda create -n envname ltr_finder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ltr_finder:<tag>

(see `ltr_finder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ltr_finder| image:: https://img.shields.io/conda/dn/bioconda/ltr_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/ltr_finder
   :alt:   (downloads)
.. |docker_ltr_finder| image:: https://quay.io/repository/biocontainers/ltr_finder/status
   :target: https://quay.io/repository/biocontainers/ltr_finder
.. _`ltr_finder/tags`: https://quay.io/repository/biocontainers/ltr_finder?tab=tags


.. raw:: html

    <script>
        var package = "ltr_finder";
        var versions = ["1.07","1.07","1.07","1.07","1.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ltr_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ltr_finder/README.html