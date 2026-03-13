:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bloocoo'
.. highlight: bash

bloocoo
=======

.. conda:recipe:: bloocoo
   :replaces_section_title:
   :noindex:

   Bloocoo is a k\-mer spectrum\-based read error corrector\, designed to correct large datasets with a very low memory footprint. As an example\, it can correct whole human genome re\-sequencing reads at 70 x coverage with less than 4GB of memory.

   :homepage: http://gatb.inria.fr/software/bloocoo/
   :license: aGPL v3
   :recipe: /`bloocoo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bloocoo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bloocoo/meta.yaml>`_

   


.. conda:package:: bloocoo

   |downloads_bloocoo| |docker_bloocoo|

   :versions:
      
      

      ``1.0.7-7``,  ``1.0.7-6``,  ``1.0.7-5``,  ``1.0.7-4``,  ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install bloocoo

to add into an existing workspace instead, run::

    pixi add bloocoo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bloocoo

Alternatively, to install into a new environment, run::

    conda create -n envname bloocoo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bloocoo:<tag>

(see `bloocoo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bloocoo| image:: https://img.shields.io/conda/dn/bioconda/bloocoo.svg?style=flat
   :target: https://anaconda.org/bioconda/bloocoo
   :alt:   (downloads)
.. |docker_bloocoo| image:: https://quay.io/repository/biocontainers/bloocoo/status
   :target: https://quay.io/repository/biocontainers/bloocoo
.. _`bloocoo/tags`: https://quay.io/repository/biocontainers/bloocoo?tab=tags


.. raw:: html

    <script>
        var package = "bloocoo";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bloocoo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bloocoo/README.html