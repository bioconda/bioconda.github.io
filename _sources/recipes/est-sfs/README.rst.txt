:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'est-sfs'
.. highlight: bash

est-sfs
=======

.. conda:recipe:: est-sfs
   :replaces_section_title:
   :noindex:

   est\-sfs \( Keightley and Jackson\, 2018\) is a stand\-alone implementation of a method to infer the unfolded site frequency spectrum \(the uSFS\) and ancestral state probabilities by maximum likelihood \(ML\).

   :homepage: https://sourceforge.net/projects/est-usfs/
   :license: Free for Academic Use
   :recipe: /`est-sfs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/est-sfs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/est-sfs/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1534/genetics.118.301120`

   


.. conda:package:: est-sfs

   |downloads_est-sfs| |docker_est-sfs|

   :versions:
      
      

      ``2.04-1``,  ``2.04-0``

      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``

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

    pixi global install est-sfs

to add into an existing workspace instead, run::

    pixi add est-sfs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install est-sfs

Alternatively, to install into a new environment, run::

    conda create -n envname est-sfs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/est-sfs:<tag>

(see `est-sfs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_est-sfs| image:: https://img.shields.io/conda/dn/bioconda/est-sfs.svg?style=flat
   :target: https://anaconda.org/bioconda/est-sfs
   :alt:   (downloads)
.. |docker_est-sfs| image:: https://quay.io/repository/biocontainers/est-sfs/status
   :target: https://quay.io/repository/biocontainers/est-sfs
.. _`est-sfs/tags`: https://quay.io/repository/biocontainers/est-sfs?tab=tags


.. raw:: html

    <script>
        var package = "est-sfs";
        var versions = ["2.04","2.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/est-sfs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/est-sfs/README.html