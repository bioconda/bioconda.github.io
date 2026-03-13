:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnuvid'
.. highlight: bash

gnuvid
======

.. conda:recipe:: gnuvid
   :replaces_section_title:
   :noindex:

   GNUVID is Gene Novelty Unit\-based Virus IDentification for SARS\-CoV\-2

   :homepage: https://github.com/ahmedmagds/GNUVID
   :license: GPL / GPLv3
   :recipe: /`gnuvid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnuvid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnuvid/meta.yaml>`_

   


.. conda:package:: gnuvid

   |downloads_gnuvid| |docker_gnuvid|

   :versions:
      
      

      ``2.4-0``,  ``2.3-0``,  ``2.2-3``,  ``2.2-2``,  ``2.2-1``,  ``2.2-0``,  ``2.1-0``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends on blast: ``>=2.9.0``
   :depends on gofasta: ``>=0.0.3``
   :depends on mafft: ``>=7.453``
   :depends on matplotlib-base: ``>=3.3.3``
   :depends on minimap2: ``>=2.17``
   :depends on pandas: ``>=1.1.5``
   :depends on python: ``>=3.8``
   :depends on scikit-learn: ``0.24.2.*``

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

    pixi global install gnuvid

to add into an existing workspace instead, run::

    pixi add gnuvid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gnuvid

Alternatively, to install into a new environment, run::

    conda create -n envname gnuvid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gnuvid:<tag>

(see `gnuvid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gnuvid| image:: https://img.shields.io/conda/dn/bioconda/gnuvid.svg?style=flat
   :target: https://anaconda.org/bioconda/gnuvid
   :alt:   (downloads)
.. |docker_gnuvid| image:: https://quay.io/repository/biocontainers/gnuvid/status
   :target: https://quay.io/repository/biocontainers/gnuvid
.. _`gnuvid/tags`: https://quay.io/repository/biocontainers/gnuvid?tab=tags


.. raw:: html

    <script>
        var package = "gnuvid";
        var versions = ["2.4","2.3","2.2","2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnuvid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnuvid/README.html