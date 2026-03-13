:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seshat'
.. highlight: bash

seshat
======

.. conda:recipe:: seshat
   :replaces_section_title:
   :noindex:

   Tools for programmatically annotating VCFs with the Seshat TP53 database.

   :homepage: https://github.com/clintval/tp53
   :license: MIT / MIT
   :recipe: /`seshat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seshat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seshat/meta.yaml>`_

   


.. conda:package:: seshat

   |downloads_seshat| |docker_seshat|

   :versions:
      
      

      ``0.10.0-0``

      

   
   :depends on beautifulsoup4: ``>=4.12``
   :depends on google-api-python-client: ``>=2.151``
   :depends on google-auth-httplib2: ``>=0.2``
   :depends on google-auth-oauthlib: ``>=1.2.1``
   :depends on lxml: ``>=5.3``
   :depends on openjdk: ``>=11``
   :depends on python: ``>=3.11``
   :depends on python-chromedriver-binary: ``>=130``
   :depends on selenium: ``>=3.141.0``
   :depends on types-beautifulsoup4: ``>=4.12``

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

    pixi global install seshat

to add into an existing workspace instead, run::

    pixi add seshat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seshat

Alternatively, to install into a new environment, run::

    conda create -n envname seshat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seshat:<tag>

(see `seshat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seshat| image:: https://img.shields.io/conda/dn/bioconda/seshat.svg?style=flat
   :target: https://anaconda.org/bioconda/seshat
   :alt:   (downloads)
.. |docker_seshat| image:: https://quay.io/repository/biocontainers/seshat/status
   :target: https://quay.io/repository/biocontainers/seshat
.. _`seshat/tags`: https://quay.io/repository/biocontainers/seshat?tab=tags


.. raw:: html

    <script>
        var package = "seshat";
        var versions = ["0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seshat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seshat/README.html